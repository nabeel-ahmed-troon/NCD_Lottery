// import React from "react";

// export default function NavBar() {
//   return (
//     <>
//       <nav class="navbar navbar-dark bg-dark">
//         <div class="container-fluid">
//           <a class="navbar-brand">Lottery Smart Contract</a>
//           <ul class="nav justify-content-center">
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="#">
//                 Airdrop
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 Participate
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 Claim Reward
//               </a>
//             </li>
//           </ul>
//           <form class="d-flex" role="search">
//             <button class="btn btn-success" type="submit">
//               Connect Wallet
//             </button>
//           </form>
//         </div>
//       </nav>
//     </>
//   );
// }
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
