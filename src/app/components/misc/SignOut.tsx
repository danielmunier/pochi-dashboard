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
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
