export function Footer() {
  return (
    <footer className='mt-8 mb-4'>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
        <div className='flex items-center gap-1'>
          <span className='text-sm text-neutral-500'>
            © 2025 All Rights Reserved
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <a
            className=''
            href='https://github.com/IvanDok13'
            aria-label='Github link'
          >
            <span className='text-sm'>Created by IvanDok</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
