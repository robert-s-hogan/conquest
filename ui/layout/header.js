import Link from "next/link";
import { Auth } from "aws-amplify";

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("Error signing out: ", error);
  }
}

function Header() {
  return (
    <header className='flex justify-between items-center bg-gray-700 text-white p-4'>
      <h1>Conquest</h1>
      <nav className='flex items-center space-x-4'>
        <Link href='/'>Home</Link>
        <Link href='/account'>Account</Link>
        <button className='btn' onClick={signOut}>
          Sign Out
        </button>
      </nav>
    </header>
  );
}

export default Header;
