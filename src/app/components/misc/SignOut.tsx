import { signOut } from "@/auth";

export function SignOut() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit" className="bg-red-600 p-2 rounded text-white">Logout</button>
      </form>
    </div>
  );
}
