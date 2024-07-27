import {FaPlus } from 'react-icons/fa';
import Link from 'next/link';

export async function Button() {
    
  return (
        <div>

            <button
               
            >
                <Link
                href="/api/bot"
                className='flex items-center gap-2 bg-orange-600 text-white font-bold py-2 px-4 rounded'
                >
                    <FaPlus />
                    <span>Me adicione! </span>
                </Link>
            </button>
        </div >
    );

    return
}
