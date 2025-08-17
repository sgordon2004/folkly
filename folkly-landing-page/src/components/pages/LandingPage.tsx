

const LandingPage = () => {
  return (
    <div className='min-h-screen w-full'>
      <div className='p-8'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to Folkly</h1>
        <p className='text-lg mb-8'>This is the landing page content.</p>
        
        {/* Add some content to demonstrate scrolling */}
        <div className='space-y-8'>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className='p-6 bg-gray-100 rounded-lg'>
              <h2 className='text-2xl font-semibold mb-2'>Section {i + 1}</h2>
              <p className='text-gray-700'>
                This is some sample content to demonstrate the scrolling behavior. 
                The header should remain fixed at the top while this content scrolls underneath it.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default LandingPage
