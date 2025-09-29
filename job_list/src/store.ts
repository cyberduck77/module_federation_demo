import { reactive } from "vue";
import { supabase } from "./client";
import type { Tables, TablesInsert } from "./database.types";

export interface Store {
  jobs: Tables<"jobs">[];
  newJob: TablesInsert<"jobs">;
  searchText: string;
  dateFilter: string;
}

export const store = reactive<Store>({
  jobs: [],
  newJob: {
    title: "",
    description: "",
  },
  searchText: "",
  dateFilter: "",
});

let searchTimeout: NodeJS.Timeout | null = null;

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

export const addJob = async (): Promise<void> => {
  if (!store.newJob.title || !store.newJob.description) return
  const { data: jobs, error } = await supabase
    .from('jobs')
    .insert(store.newJob)
    .select()
  if (error) return
  store.newJob = {
    title: "",
    description: "",
  }
  load()
}
