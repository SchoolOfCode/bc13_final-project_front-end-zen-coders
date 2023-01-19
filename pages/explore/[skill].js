import Navbar from '../../components/Navbar/Navbar';
import { useRouter } from 'next/router';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Skill() {
  const router = useRouter();
  const skill = router.query.skill;
  return (
    <div>
      <SearchBar />
      <h1>Learn more about {skill} here!</h1>
    </div>
  );
}

export async function getSeverSideProps({params}){
  const skill = await fetch (`https://hobi.onrender.com/events/explore?skill=${skill}`)
}