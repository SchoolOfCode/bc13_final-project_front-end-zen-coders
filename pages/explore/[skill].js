import Navbar from '../../components/Navbar/Navbar';
import { useRouter } from 'next/router';

export default function Skill() {
  const router = useRouter();
  const skill = router.query.skill;
  return (
    <div>
      <Navbar />
      <h1>Learn more about {skill} here!</h1>
    </div>
  );
}
