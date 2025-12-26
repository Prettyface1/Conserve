export const formatSTX = (microSTX: number): string => {
    return (microSTX / 1_000_000).toFixed(6) + ' STX';
};

export const formatAddress = (address: string): string => {
    if (!address || address.length < 10) return address;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
