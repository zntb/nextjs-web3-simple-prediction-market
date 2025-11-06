# Simple Prediction Market

A decentralized prediction market platform built on Ethereum that allows users to bet on binary outcomes using ERC20 tokens. Built with Next.js, TypeScript, Thirdweb, and Solidity.

![Prediction Market Banner](public/pm.jpeg)

## 🚀 Features

- **Create Markets**: Set up prediction markets with two possible outcomes
- **Buy Shares**: Purchase shares representing your belief in an outcome
- **Automated Market Making**: Dynamic share pricing based on total holdings
- **Claim Winnings**: Winners receive their stake plus a proportional share of losing bets
- **Multi-tab Interface**: View active, pending, and resolved markets
- **Web3 Integration**: Connect wallet with account abstraction support
- **Token Faucet**: Claim test tokens to participate in markets

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Thirdweb SDK**: Web3 integration and wallet management
- **shadcn/ui**: Beautiful UI components built on Radix UI
- **Tailwind CSS**: Utility-first styling

### Smart Contracts
- **Solidity**: Smart contract development
- **Foundry**: Testing and deployment framework
- **OpenZeppelin**: Secure contract standards

### Blockchain
- **Sepolia Testnet**: Ethereum test network
- **ERC20 Token**: Custom prediction token (PMT)

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- MetaMask or compatible Web3 wallet
- Sepolia testnet ETH (for gas fees)

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/zntb/nextjs-web3-simple-prediction-market.git
cd nextjs-web3-simple-prediction-market
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_thirdweb_client_id

# Backend API variables
RPC_URL=https://sepolia.infura.io/v3/your_infura_key
PRIVATE_KEY=your_wallet_private_key
TOKEN_ADDRESS=0x1Cc10F13Ea489ea3184D397196c892B148e0478C
```

**Get your Thirdweb Client ID:**
1. Visit [Thirdweb Dashboard](https://thirdweb.com/dashboard)
2. Create a new project
3. Copy your Client ID

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📝 Smart Contract Deployment

The contracts are located in the `pmcontract` directory.

### Deploy with Foundry

```bash
cd pmcontract
forge build
forge test
npx thirdweb deploy
```

### Contract Addresses (Sepolia)

- **Prediction Market**: `0x565fBDEBa409Cdf03EeC311eB96be3FDBF3e67D8`
- **Prediction Token (PMT)**: `0x1Cc10F13Ea489ea3184D397196c892B148e0478C`

## 🎮 How to Use

### For Users

1. **Connect Wallet**: Click "Sign In" to connect via in-app wallet
2. **Claim Tokens**: Get free PMT tokens from the faucet
3. **Browse Markets**: View active prediction markets
4. **Buy Shares**: Select an outcome and purchase shares
5. **Claim Winnings**: After resolution, claim your rewards

### For Market Creators (Owner Only)

Markets can be created by calling the `createMarket` function on the smart contract:

```solidity
createMarket(
    "Will ETH reach $5000 by 2025?",
    "Yes",
    "No",
    7 days
)
```

## 🏗️ Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/claimToken/    # Token faucet API
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── enhanced-prediction-market-dashboard.tsx
│   │   ├── marketCard.tsx
│   │   ├── market-buy-interface.tsx
│   │   ├── market-resolved.tsx
│   │   └── navbar.tsx
│   ├── constants/
│   │   ├── contract.ts        # Contract addresses
│   │   └── tokenAbi.json
│   └── lib/utils.ts
├── pmcontract/
│   └── src/
│       └── SimplePredictionMarket.sol
└── public/
```

## 🔐 Smart Contract Details

### SimplePredictionMarket.sol

Key functions:

- `createMarket()`: Create a new prediction market
- `buyShares()`: Purchase shares for an outcome
- `resolveMarket()`: Set the winning outcome (owner only)
- `claimWinnings()`: Claim rewards for winning bets
- `getMarketInfo()`: Retrieve market details
- `getSharesBalance()`: Check user's share balance

### Reward Calculation

Winners receive:
```
winnings = userShares + (userShares × losingShares / winningShares)
```

This ensures:
- You get your original stake back
- Plus a proportional share of all losing bets

## 🧪 Testing

```bash
# Frontend tests
npm run test

# Smart contract tests
cd pmcontract
forge test
```

## 🚀 Deployment

### Frontend (Vercel)

```bash
npm run build
# Deploy to Vercel or your preferred platform
```

### Smart Contracts

```bash
cd pmcontract
npx thirdweb deploy
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [Add your deployment URL]
- **Documentation**: [Add documentation link]
- **Discord**: [Add community link]

## 🙏 Acknowledgments

- [Thirdweb](https://thirdweb.com/) for Web3 infrastructure
- [shadcn/ui](https://ui.shadcn.com/) for UI components
- [OpenZeppelin](https://openzeppelin.com/) for secure contracts

## 📧 Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/zntb/nextjs-web3-simple-prediction-market](https://github.com/zntb/nextjs-web3-simple-prediction-market)

---

**⚠️ Disclaimer**: This is a demonstration project for educational purposes. Do not use in production without proper auditing and security reviews.
