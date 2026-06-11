export const supabaseConfig = {
  url: import.meta.env.VITE_SUPABASE_URL || "",
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || ""
};

export const supabaseReady = Boolean(supabaseConfig.url && supabaseConfig.anonKey);
