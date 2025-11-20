import Header from "@/components/header"
import { SignupForm } from "@/components/signup-form"

export const metadata = {
  title: "Sign Up - Login Simulation",
  description: "Create a new account",
}

export default function SignupPage() {
  return (
    <main>
      <Header />
      <SignupForm />
    </main>
  )
}