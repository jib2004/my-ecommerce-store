import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 1,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

export default function Cart() {
  return (
    <IconButton aria-label="cart"  className='size-6'>
      <StyledBadge badgeContent={4} color={'info'}>
        <ShoppingCartIcon sx={{color:"black"}}/>
      </StyledBadge>
    </IconButton>
  );
}