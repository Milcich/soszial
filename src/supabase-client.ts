import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseURL = "https://tpijfamriyuerglkphpw.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseURL, supabaseAnonKey);
