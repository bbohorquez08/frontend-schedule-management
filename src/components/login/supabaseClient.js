import {createClient} from '@supabase/supabase-js'

//const supabaseUrl=process.env.REACT_APP_SUPABASE_URL;
//const supabaseAnonKey=process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase=createClient('https://rbvrafwinzmdjkocdcgt.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJidnJhZndpbnptZGprb2NkY2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI3NzY3NTMsImV4cCI6MTk4ODM1Mjc1M30.H5gaqhemSqSypYMDFNbUa8GALCW0mM0xva9Jw_Ml4Uc')