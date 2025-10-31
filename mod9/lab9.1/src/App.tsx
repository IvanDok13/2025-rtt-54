import { useState } from 'react';
import { AlertBox } from './components/AlertBox/AlertBox';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import Section from './components/Section';
import Button from './components/UserButton';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import { product, user } from './models/data';

function App() {
  // create cart state functions
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
  };

  return (
    <main className='bg-stone-900 text-white h-full p-5'>
      <h1 className='text-4xl'>Components Library</h1>

      {/* Sections func component */}

      <Section title='Section 1'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          eius explicabo eligendi corporis id magnam quas quaerat voluptates
          similique accusantium distinctio quibusdam, fuga blanditiis
          praesentium. Laborum molestias iste asperiores error.
        </p>
      </Section>

      <Section title='Section 2'>
        <h3>Subheader</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et, saepe
          voluptatibus, recusandae exercitationem impedit unde expedita error
          magni nam molestias minus at nisi sequi quaerat excepturi
          necessitatibus eius quam?
        </p>
      </Section>

      <Section title='Buttons'>
        <div className='grid grid-cols-4 gap-2'>
          <Button text='Click me!' />

          <Button
            text='Submit'
            type='submit'
            onClick={() => console.log('Submit')}
          />

          <Button
            text='Reset'
            type='reset'
            onClick={() => console.log('Reset')}
          />

          <Button
            text='Disabled'
            type='reset'
            disabled={true}
            onClick={() => console.log('Disabled')}
          />
        </div>
      </Section>

      {/* alertBox function components */}

      <Section title='AlertBox'>
        <div className='grid gap-2'>
          <AlertBox
            type='success'
            message='Your profile has been updated successfully!'
            onClose={() => {
              alert('Alert closed');
            }}
          >
            <p className='text-sm'>
              You can now continue using the application.
            </p>
          </AlertBox>

          <AlertBox
            type='error'
            message='Are you sure you want to delete this item?'
            onClose={() => alert('Deleted')}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              aut totam quod nulla soluta hic distinctio dignissimos, culpa
              earum facilis laborum, neque odit doloremque provident repudiandae
              placeat dolorem adipisci cupiditate!
            </p>
          </AlertBox>

          <AlertBox
            type='info'
            message='Information, I need more interesting tasks!'
            onClose={() => alert('Deleted')}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              aut totam quod nulla soluta hic distinctio dignissimos, culpa
              earum facilis laborum, neque odit doloremque provident repudiandae
              placeat dolorem adipisci cupiditate!
            </p>
          </AlertBox>

          <AlertBox
            type='warning'
            message='Your profile has been deleted successfully!'
            onClose={() => alert('Deleted')}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              aut totam quod nulla soluta hic distinctio dignissimos, culpa
              earum facilis laborum, neque odit doloremque provident repudiandae
              placeat dolorem adipisci cupiditate!
            </p>
          </AlertBox>
        </div>
      </Section>

      {/* UserProfileCard function components */}

      <Section title='User Profile Cards'>
        <div className='grid grid-cols-3 gap-2'>
          <UserProfileCard
            user={user}
            onEdit={() => {
              alert('Show edit');
            }}
          >
            {' '}
          </UserProfileCard>

          <UserProfileCard user={user} onEdit={() => alert('Show edit')}>
            {' '}
          </UserProfileCard>

          <UserProfileCard user={user} onEdit={() => alert('Show edit')}>
            {' '}
          </UserProfileCard>
        </div>
      </Section>

      {/* ProductDisplay function components */}

      <Section title='Product Display'>
        <div className='grid grid-cols-3 gap-2'>
          <ProductDisplay
            product={product}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={handleAddToCart}
          >
            <div className='text-sm text-gray-500'>Free shipping available</div>
          </ProductDisplay>

          <ProductDisplay
            product={product}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={handleAddToCart}
          >
            <div className='text-sm text-gray-500'>Free shipping available</div>
          </ProductDisplay>

          <ProductDisplay
            product={product}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={handleAddToCart}
          >
            <div className='text-sm text-gray-500'>Free shipping available</div>
          </ProductDisplay>
        </div>
      </Section>
    </main>
  );
}

export default App;
