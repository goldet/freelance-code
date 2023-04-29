import withAuth from "../components/withAuth";
import Popup from "@/components/Popup";
import Layout from "../components/Layout";
import GeneralLoadingMessage from "@/components/GeneralLoadingMessage";
import SuccessMessage from "@/components/SuccessMessage";
import useDashboard from "@/hooks/useDashboard";
import PageContainer from "@/components/PageContainer";
import BreadcrumbMenu from "@/components/BreadcrumbMenu";
import FreelancerInfoDisplay from "@/components/FreelancerInfoDislay";

const DashboardPage = () => {
  const {
    user,
    handleDelete,
    handleDeleteFalse,
    handleDeleteTrue,
    successMessage,
    userDeleted,
    openEditProfile,
    popup,
    successEmpty,
  } = useDashboard();

  if (!user) {
    return <GeneralLoadingMessage />;
  }

  return (
    <Layout>
      <PageContainer>
        <BreadcrumbMenu breadcrumb={true} />

        <div>
          {successMessage && successEmpty.length > 0 ? (
            <SuccessMessage successMessage={successMessage} />
          ) : null}
        </div>

        {userDeleted ? (
          <div className="bg-coGrey my-1/6 mx-auto border-solid border-4 border-coGreen rounded-md w-3/4 m-0 py-10 pl-5 leading-4 font-semibold text-lg">
            Sorry to see you go! Your account has been safely deleted.
          </div>
        ) : (
          <FreelancerInfoDisplay
            isDashboard={true}
            user={user}
            openEditProfile={openEditProfile}
            handleDelete={handleDelete}
          />
        )}
        {popup.show && (
          <Popup
            handleDeleteTrue={handleDeleteTrue}
            handleDeleteFalse={handleDeleteFalse}
          />
        )}
      </PageContainer>
    </Layout>
  );
};
export default withAuth(DashboardPage);
