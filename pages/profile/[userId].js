import Navbar from "../../components/Navbar/Navbar";
import { useRouter } from "next/router";
import { data } from "autoprefixer";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileEventCard from "../../components/ProfileEventCard/profileEventCard";
import AddEventCard from "../../components/AddEventCard/AddEventCard";

// router.query allows us to access the end of the url (i.e. user id) - Done

// fetch data from user id and display profile information for that user

// fetch event data for user and display relevant events

// if it's an invalid id display an error message

export const getServerSideProps = async (userid) => {
  try {
    console.log(userid);
    const res = await fetch(
      `https://hobi.onrender.com/users/profile/${userid}`
    );
    const data = await res.json();
    console.log(`This is data ---->${data}`);

    return {
      props: {
        user: data,
      },
    };
  } catch (err) {
    console.log(err);
    return { props: { data: err } };
  }
};

export default function ProfilePage(props) {
  const router = useRouter();
  const userid = router.query.userId;
  getServerSideProps(userid);

  return (
    <div>
      <h1></h1>
    </div>
  );
}
