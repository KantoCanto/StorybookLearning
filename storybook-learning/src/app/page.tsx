import Benefits from '../components/ui/Benefits';
import Header from '../components/ui/Header';
import Navbar from '../components/ui/navbar/Navbar';
import TrustedBy from '../components/ui/TrustedBy';

export default function Home() {
  return (
    <main className='flex min-h-screen justify-center px-10 '>
      <div className='w-full'>
        <Navbar />
        <Header />
        <TrustedBy />
        <Benefits />
      </div>
    </main>
  );
}
