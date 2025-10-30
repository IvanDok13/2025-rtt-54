import type { UserProfileCardProps } from '../../types';
import Button from '../Button';

function UserProfileCard({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <div>
      <div className='flex mb-5'>
        <img
          src={user.avatarUrl}
          alt='user-avatar'
          width='100'
          className='mr-2'
        />

        <div className='flex flex-col text-center'>
          <div>{user.name}</div>

          <div>{showEmail ? user.email : null}</div>

          <div>{showRole ? user.role : null}</div>
        </div>
      </div>

      {onEdit && <Button text='Edit' className='w-full'></Button>}

      <div>{children}</div>
    </div>
  );
}

export default UserProfileCard;
