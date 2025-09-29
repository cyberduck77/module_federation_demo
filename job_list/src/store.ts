import { reactive } from "vue";
import { supabase } from "./client";
import type { Tables, TablesInsert } from "./database.types";

export interface Store {
  jobs: Tables<"jobs">[];
  newJob: TablesInsert<"jobs">;
  typeFilter: "engineer" | "manager" | "director" | null;
  searchText: string;
  dateFilter: string;
}

export const store = reactive<Store>({
  jobs: [],
  newJob: {
    type: null,
    title: "",
    description: "",
  },
  typeFilter: null,
  searchText: "",
  dateFilter: "",
});

let searchTimeout: NodeJS.Timeout | null = null;

export const selectType = (type: "engineer" | "manager" | "director" | null): void => {
  store.typeFilter = type
  load()
}

export const search = (text: string): void => {
  store.searchText = text
  load()
}

export const selectDate = (date: string): void => {
  store.dateFilter = date
  load()
}

export const load = (): void => {
  if (searchTimeout) {
    clearTimeout(searchTimeout)
  }

  searchTimeout = setTimeout(async () => {
    let query = supabase
    .from('jobs')
    .select('*')
    .order('created_at', { ascending: false })

    if (store.typeFilter) {
      query = query.eq('type', store.typeFilter)
    }

    // Apply search filter if search text exists
    if (store.searchText.trim()) {
      query = query.or(`title.ilike.%${store.searchText}%,description.ilike.%${store.searchText}%`)
    }

    // Apply date filter if date is selected
    if (store.dateFilter) {
      query = query.gte('created_at', store.dateFilter)
        .lt('created_at', new Date(new Date(store.dateFilter).getTime() + 24 * 60 * 60 * 1000).toISOString())
    }

    const { data: jobs, error } = await query
    if (error) return
    store.jobs = jobs ?? []
  }, 300)
};

supabase
  .channel('room1')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'jobs' }, payload => {
    load()
  })
  .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'jobs' }, payload => {
    const job = store.jobs.find(job => job.id === payload.new.id)
    if (job) {
      job.title = payload.new.title
      job.description = payload.new.description
      job.enrollments = payload.new.enrollments
    }
  })
  .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'jobs' }, payload => {
    store.jobs = store.jobs.filter(job => job.id !== payload.old.id)
  })
  .subscribe()

export const enrollJob = async (id: number, enrollments: number): Promise<void> => {
  const { data: jobs, error } = await supabase
    .from('jobs')
    .update({ enrollments: enrollments + 1 })
    .eq('id', id)
    .select()
  if (error) return
}
