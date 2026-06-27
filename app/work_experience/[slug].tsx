import { useRouter } from 'next/router';

const WorkDetail = () => {
  const router = useRouter();
  const { slug } = router.query; // Récupère le slug dynamique

  return (
    <div>
      <h1>Détails du travail : {slug}</h1>
      {/* Ici tu affiches les détails du travail selon le slug */}
    </div>
  );
};

export default WorkDetail;
