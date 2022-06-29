// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <9.0.0;

// Relevant Libraries
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract ZIPSharks is ERC721, Ownable {
    // Utils Used
    using Counters for Counters.Counter;
    using SafeMath for uint256;

    // Properties
    bool public publicSale;
    uint256 public whitelistPrice = 0.0222 ether;
    uint256 public mintPrice = 0.0333 ether;
    uint16 public totalSupply = 5555;
    string public uri;
    // bytes32 public immutable root = *INSERT ROOT HERE*;

    Counters.Counter private _tokenIdTracker;

    // Mappings
    mapping(address => bool) whitelistClaimed;

    constructor() ERC721("ZIPSharks", "ZIPS") {}

    // Modifiers
    modifier whitelistConfig() {
        _;
        require(whitelistClaimed[msg.sender] != true);
    }

    function whitelistMint() public payable whitelistConfig {
        require(
            msg.value.mod(mintPrice) == 0,
            "Please mint through the website."
        );

        uint256 _amount = 0;
        uint256 _balance = msg.value;

        // Uses the balance sent to generate set number of NFTs
        while (_balance >= whitelistPrice) {
            _balance = _balance.sub(whitelistPrice);
            _amount = _amount.add(1);
        }

        // Limits the TokenID
        require(
            (_tokenIdTracker.current().add(_amount)) <= totalSupply,
            "Current Mint Limit Reached. Try minting less."
        );

        // Runs a for loop to continue minting for the set amount asked.
        for (uint8 counter = 0; counter < _amount; counter++) {
            // 1.Mints the NFT to the current tokenID
            // 2. Maps the current tokenChoice to the current URI
            // 3. Adds one to tokenIDtracker
            super._mint(msg.sender, _tokenIdTracker.current());
            _tokenIdTracker.increment();
        }

        whitelistClaimed[msg.sender] = true;
    }

    function publicMint() public payable {
        require(
            msg.value.mod(mintPrice) == 0,
            "Please mint through the website."
        );

        uint256 _amount = 0;
        uint256 _balance = msg.value;

        // Uses the balance sent to generate set number of NFTs
        while (_balance >= mintPrice) {
            _balance = _balance.sub(mintPrice);
            _amount = _amount.add(1);
        }

        // Limits the TokenID
        require(
            (_tokenIdTracker.current().add(_amount)) <= totalSupply,
            "Current Mint Limit Reached. Try minting less."
        );

        // Runs a for loop to continue minting for the set amount asked.
        for (uint8 counter = 0; counter < _amount; counter++) {
            // 1.Mints the NFT to the current tokenID
            // 2. Maps the current tokenChoice to the current URI
            // 3. Adds one to tokenIDtracker
            super._mint(msg.sender, _tokenIdTracker.current());
            _tokenIdTracker.increment();
        }
    }

    // ADMIN Methods

    // Switches sale to public
    function switchToPublic() public onlyOwner {
        bool current = publicSale;
        publicSale = !current;
    }

    // URI methods
    function setBaseUri(string memory _uri) public onlyOwner {
        uri = _uri;
    }

    // OVERRIDE
    function _baseURI() internal view virtual override returns (string memory) {
        return uri;
    }
}
