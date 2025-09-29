import { store } from "./store"
import { supabase } from "./client"

export const useApis = () => {
  const addJob = async (): Promise<void> => {
    if (!store.newJob.title || !store.newJob.description || !store.newJob.type) return
    const { data: jobs, error } = await supabase
      .from('jobs')
      .insert(store.newJob)
      .select()
    if (error) return
    store.newJob = {
      title: "",
      description: "",
      type: null,
    }
  }

  const deleteJob = async (id: number): Promise<void> => {
    const { data: jobs, error } = await supabase
      .from('jobs')
      .delete()
      .eq('id', id)
      .select()
    if (error) return
  }

  return {
    addJob,
    deleteJob
  }
}