import LoginForm from "@/modules/auth/components/LoginForm";

export default async function LoginPage() {
  // Simulate loading
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoginForm/>
    </div>
  );
}