import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import NavBar from "@/components/navbar";



export default function App({ Component, pageProps }) {

  return (
    <>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
