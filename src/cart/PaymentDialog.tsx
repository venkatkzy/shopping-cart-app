import React from "react";

import {
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  Stack,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardSharpIcon from "@mui/icons-material/CreditCardSharp";
import ContactlessIcon from "@mui/icons-material/Contactless";
import PaymentsSharpIcon from "@mui/icons-material/PaymentsSharp";

interface PaymentMethodsProps {
  onClose: () => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ onClose }) => {
  return (
    <>
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Choose Your Payment Method
      </DialogTitle>

      <DialogContent>
        <DialogContentText sx={{ mb: 3, textAlign: "center" }}>
          <Typography variant="subtitle1" color="success.main">
            💳 Pay with Credit Card & get 50% off on your order!
          </Typography>
        </DialogContentText>

        <Stack spacing={2} alignItems="center">
          <Button sx={{ width: 280 }} variant="outlined" startIcon={<CreditCardIcon />}>
            Debit Card
          </Button>
          <Button sx={{ width: 280 }} variant="outlined" startIcon={<CreditCardSharpIcon />}>
            Credit Card
          </Button>
          <Button sx={{ width: 280 }} variant="outlined" startIcon={<PaymentsSharpIcon />}>
            Cash on Delivery
          </Button>
          <Button sx={{ width: 280 }} variant="outlined" startIcon={<AccountBalanceIcon />}>
            Net Banking
          </Button>
          <Button sx={{ width: 280 }} variant="outlined" startIcon={<ContactlessIcon />}>
            UPI / Wallet
          </Button>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", mt: 3 }}>
        <Button
          variant="contained"
          color="error"
          onClick={onClose}
          sx={{ width: 280 }}
        >
          Cancel Payment
        </Button>
      </DialogActions>
    </>
  );
};

export default PaymentMethods;
