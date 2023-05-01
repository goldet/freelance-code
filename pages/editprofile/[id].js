import EditProfileForm from "@/components/EditProfileForm";
import FormHeading from "@/components/FormHeading";
import Layout from "@/components/Layout";
import PageContainer from "@/components/PageContainer";
import useEditProfile from "@/hooks/useEditProfile";

const EditProfile = () => {
  const {
    categories,
    user,
    updateProfile,
    tempProfile,
    setTempProfile,
    goBack,
    changed,
    setChanged,
  } = useEditProfile();

  return (
    <Layout>
      {user && tempProfile ? (
        <PageContainer>
          <FormHeading text={"Edit your profile"} />
          <EditProfileForm
            categories={categories}
            tempProfile={tempProfile}
            setChanged={setChanged}
            changed={changed}
            setTempProfile={setTempProfile}
            updateProfile={updateProfile}
            goBack={goBack}
            user={user}
          />
        </PageContainer>
      ) : null}
    </Layout>
  );
};

export default EditProfile;
