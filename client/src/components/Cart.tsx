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

type cartProp={
  cart: number | undefined
}


export default function Cart({cart}:cartProp) {
  return (
    <IconButton aria-label="cart"  className='size-6'>
      <StyledBadge badgeContent={cart} color={'info'}>
        <ShoppingCartIcon sx={{color:"black",width:35,height:35}}/>
      </StyledBadge>
    </IconButton>
  );
}