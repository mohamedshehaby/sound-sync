import Header from "@/components/Header";
import AccountForm from "@/features/account/AccountForm";
import supabaseServerClient from "@/api/supbaseClients/supabaseServerClient";
import { redirect } from "next/navigation";
import { paths } from "@/utils/paths";

const AccountPage = async () => {
  const supabase = supabaseServerClient();
  const session = await supabase.auth.getSession();

  console.log(session, "session");

  if (!session.data.session) {
    redirect(paths.home());
  }

  return (
    <>
      <Header>
        <h1 className="text-3xl font-bold text-white mb-1">Account Settings</h1>
        <p>Update your account info</p>
      </Header>
      <AccountForm />
    </>
  );
};

export default AccountPage;
