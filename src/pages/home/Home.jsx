import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Category from "../../components/category/Category";
import Products from "../../components/products/Products";
import "@fontsource/quicksand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        fontFamily: "'Quicksand', sans-serif",
        py: 6,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            mr: 2,
            gap:2,
          }}
        >
          <Box>
          <FontAwesomeIcon icon={faLeaf} style={{ fontSize: '32px', color: '#ffb3d1' }} />

          <Typography
            variant="h4"
            noWrap
            sx={{
              mt: 1,
              fontFamily: 'quicksand',
              fontWeight: 700,
              fontSize: '28px',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            E-commerce
          </Typography>
</Box>
          <Typography
            variant="subtitle1"
            sx={{
              mt: 1,
              color: 'white',
              fontFamily: "'Quicksand', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
            }}
          >
            The best way to buy the products you love.
          </Typography>
        </Box>

        {/* فاصل ومسافة للكايتيجوري */}
        <Box
          sx={{
            mt: 6, // مسافة من اللي فوق
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Category />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            mr: 2,
            gap:2,
          }}
        >
          <Box>
          <FontAwesomeIcon icon={faLeaf} style={{ fontSize: '32px', color: '#ffb3d1' }} />

          <Typography
            variant="h4"
            noWrap
            sx={{
              mt: 1,
              fontFamily: 'quicksand',
              fontWeight: 700,
              fontSize: '28px',
              color: 'white',
              textDecoration: 'none',
            }}
          >
Discover What’s New
          </Typography>
</Box>
          <Typography
            variant="subtitle1"
            sx={{
              mt: 1,
              color: 'white',
              fontFamily: "'Quicksand', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
            }}
          >
Discover the best deals and find your favorite products with ease — smart shopping starts here!          </Typography>
        </Box>
<Box
          sx={{
            mt: 6, // مسافة من اللي فوق
            display: 'flex',
            justifyContent: 'center',
          }}
        >
         <Products/>
        </Box>
      </Container>
    </Box>
  );
}
