'use client'

import AuthForm from '@/components/AuthForm'

export default function SignUpPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <AuthForm mode="signup" />
    </div>
  )
}
