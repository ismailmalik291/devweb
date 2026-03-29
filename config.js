// ============================================
// DEVWEB CONFIG — APNI KEYS YAHAAN DAALO
// ============================================

const CONFIG = {

  // SUPABASE
  SUPABASE_URL: "https://scgoagvnyantfsvygeik.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjZ29hZ3ZueWFudGZzdnlnZWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyMDA3NjAsImV4cCI6MjA4OTc3Njc2MH0.2WJNvrTsaMY4VuE2Rf6At1wUsFHbfpQnNLwSko0tLOo",

  // GEMINI AI
 GROQ_API_KEY: "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",
 GROQ_MODEL: "llama-3.3-70b-versatile",
 GROQ_URL: "https://api.groq.com/openai/v1/chat/completions",
  // STRIPE
  STRIPE_PUBLISHABLE_KEY: "pk_test_51TDvr97MB7f11AdGltf3VcJXSbh4gBzd9LeWRZf0A0U8HxKBU28z7sNMiwgEX7Fscud6JL37iiEAi1rKOdPZWNpr00GzQsFt6E",

  // DEVWEB SETTINGS
  APP_NAME: "DevWeb",
  APP_URL: "https://devweb.vercel.app",
  SUBDOMAIN_SUFFIX: ".devweb.app",

  // PLANS
  PLANS: {
    free: {
      name: "Free",
      price: 0,
      sites: 0,
      publish: false
    },
    trial: {
      name: "Trial",
      price: 1,
      sites: 1,
      publish: true,
      stripe_price_id: "price_TRIAL_ID"
    },
    pro: {
      name: "Pro",
      price: 20,
      sites: 3,
      publish: true,
      stripe_price_id: "price_PRO_ID"
    },
    business: {
      name: "Business",
      price: 50,
      sites: 999,
      publish: true,
      white_label: true,
      stripe_price_id: "price_BUSINESS_ID"
    }
  }

};
