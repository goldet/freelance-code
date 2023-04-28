import Layout from "../components/Layout";
import SuccessMessage from "@/components/SuccessMessage";
import PageContainer from "@/components/PageContainer";
import ProfileCompletionHeading from "@/components/ProfileCompletionheading";
import ProfileCompletionForm from "@/components/ProfileCompletionForm";
import useProfileFormCompletion from "@/hooks/useProfileFormCompletion";

export default function ProfileForm() {
  const {
    categories,
    success,
    successMessage,
    animatedComponents,
    options,
    handleSkills,
    handleChange,
    handleDocument,
    handleSubmit,
    services,
    document,
  } = useProfileFormCompletion();

  return (
    <Layout navTwo={true}>
      {success ? (
        <SuccessMessage successMessage={successMessage} />
      ) : (
        <>
          <PageContainer>
            <ProfileCompletionHeading />
            <ProfileCompletionForm
              handleSubmit={handleSubmit}
              services={services}
              handleChange={handleChange}
              categories={categories}
              handleSkills={handleSkills}
              animatedComponents={animatedComponents}
              options={options}
              document={document}
              handleDocument={handleDocument}
            />
          </PageContainer>
        </>
      )}
    </Layout>
  );
}
