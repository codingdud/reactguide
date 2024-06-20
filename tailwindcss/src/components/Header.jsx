import logo from '../assets/logo.png';
export default function Header() {
  return (
    <header className='flex flex-col items-center mt-8 mb-16'>
      <img className='object-contain mb-8 w-44 h-44' src={logo} alt="A canvas" />
      <h1 className='text-1.5xl font-bold text-center uppercase text-gray-800 tracking-widest font-title md:text-2xl'>ReactArt</h1>
      <p className='text-center text-gray-600 mx-0'>A community of artists and art-lovers.</p>
    </header>
  );
}
