"use client";
import "./styles/globals.css";
import "material-icons/iconfont/material-icons.css";
import { Inter } from "next/font/google";
import Sidenav from "@/components/Sidenav/Sidenav";
import Topnav from "@/components/Topnav/Topnav";
import { WalletModal } from "@/components/WalletModal/WalletModal";
import { useState } from "react";
import { useAppStore } from "@/state/store";
import { WalletTypes } from "@/types";
import { FaucetModal } from "@/components/FaucetModal/FaucetModal";
import { fetchUserBalance } from "@/utils/cosmjs/user/fetchUserBalance";
import { callFaucet, microAmountToAmount } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Modal States
  const [walletModalOpen, setWalletModalOpen] = useState<boolean>(false);
  const [faucetModalOpen, setFaucetModalOpen] = useState<boolean>(false);

  // User balance state
  const [userBalance, setUserBalance] = useState<number | undefined>(0);

  // App store for wallet states
  const appStore = useAppStore();

  // Connect Wallet
  const connectWallet = async (walletType: WalletTypes): Promise<void> => {
    return await appStore.connectWallet(walletType, "prod");
  };

  // Fetch balance
  const fetchBalance = async (userAddress: string) => {
    // Check users balance
    const balance = await fetchUserBalance(userAddress, "uslay");
    setUserBalance(Number(microAmountToAmount(balance.amount, 6)));
    return balance;
  };

  // Query Users balance, if 0, show faucetModal
  const handleFaucet = async () => {
    // Run this only if the wallet is connected
    if (appStore.wallet.address) {
      const balance = await fetchBalance(appStore.wallet.address);
      if (balance.amount === "0") {
        setFaucetModalOpen(true);
      }
    }
  };

  // Handle Faucet call
  const requestTokens = async () => {
    await callFaucet(appStore.wallet.address);

    // Ugly solution wait for next block
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 4000); // Simulate a 4-second delay for the wallet connection
    });

    await fetchBalance(appStore.wallet.address);
  };

  return (
    <html lang="en">
      <body className={`${inter.className} dark antialiased`}>
        <div className="flex h-[calc(100vh-32px)]">
          <Sidenav
            navItems={[
              {
                label: "Nav Item 1",
                icon: "arrow_forward_ios",
                active: true,
                href: "#",
              },
              {
                label: "Nav Item 2",
                icon: "arrow_forward_ios",
                active: false,
                href: "#",
              },
            ]}
          />
          <div className="w-full">
            <Topnav
              walletAddress={appStore.wallet.address}
              onConnectWalletClick={() => {
                setWalletModalOpen(true);
              }}
              onDisconnectWalletClick={() => {
                appStore.disconnectWallet();
              }}
              navItems={[
                {
                  label: "Services",
                  href: "#",
                },
                {
                  label: "AI Agents",
                  href: "#",
                },
                {
                  label: "Steven",
                  href: "#",
                },
              ]}
              userBalance={userBalance}
            />
            <div className="p-6 overflow-y-scroll max-h-[calc(100vh-65px)]">
              {children}
            </div>
          </div>
        </div>
        <WalletModal
          onWalletClick={async (walletType) => await connectWallet(walletType)}
          open={walletModalOpen}
          setOpen={(open) => {
            setWalletModalOpen(open);
            handleFaucet();
          }}
        />

        <FaucetModal
          open={faucetModalOpen}
          setOpen={(open) => setFaucetModalOpen(open)}
          requestTokens={() => requestTokens()}
        />
      </body>
    </html>
  );
}
