export const NFTCard = ({ nft }) => {
    return (
      <div className="border shadow-lg rounded-lg overflow-hidden w-60 mx-2 my-4 bg-white">
        <img src={nft.media[0].gateway} alt={nft.title} className="object-cover w-full h-64" />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{nft.title}</h2>
          <p className="text-sm text-gray-600 mt-2">Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
          <p className="text-sm text-gray-600">Contract: {nft.contract.address.substr(0, 6)}...{nft.contract.address.substr(nft.contract.address.length - 4)}</p>
        </div>
      </div>
    );
  };
  