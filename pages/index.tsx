import { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Testimonials } from "../components/Testimonials";
import app from "./api/firebase";

import { getAuth, signInWithEmailAndPassword, signOut, getIdToken } from 'firebase/auth';
import { useRouter } from 'next/navigation';
const auth = getAuth(app);
import Router from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth';
import Hero from './../components/HeroSeccion';
import Pricing from "../components/Pricing";


const redirecrToLogin = async () => {
  typeof window !== "undefined" && Router.push("/login");
}

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (!user) {
    //redirecrToLogin();
  } else {
    console.log(user);
    user.getIdToken().then(token => {
      localStorage.setItem("token", token);
    }).catch(error => {
      console.log(error)
    });
  }



  return (
    <div className="main flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Restorador de fotos</title>
      </Head>
      <Header />
      <Hero />
      <Testimonials />
      <Pricing/>
      <Footer />
    </div>
  );
};

export default Home;

// prevent user to view this page uless it's logged in using server side propts



