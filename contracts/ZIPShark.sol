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

    //Team
    address payable ktuck = payable(0xf21df340812629D44264474d478be0215Ea60eb6);
    address payable samurai =
        payable(0xf21df340812629D44264474d478be0215Ea60eb6);
    address payable mufasa =
        payable(0xf21df340812629D44264474d478be0215Ea60eb6);

    // Properties
    bool public publicSale;
    uint256 public whitelistPrice = 0.02 ether;
    uint256 public mintPrice = 0.03 ether;
    uint16 public maxSupply = 2222;
    string public uri;
    // bytes32 public immutable root = *INSERT ROOT HERE*;

    Counters.Counter private _tokenIdTracker;

    // Mappings
    mapping(address => bool) whitelistClaimed;
    mapping(address => uint256) sharksMinted;

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

        // Limits the number minted per wallet
        require(
            sharksMinted[msg.sender].add(_amount) <= 20,
            "Max mint per wallet is 20. Try another wallet."
        );

        // Limits the TokenID to MaxSupply
        require(
            (_tokenIdTracker.current().add(_amount)) <= maxSupply,
            "Current Mint Limit Reached. Try minting less."
        );

        // Runs a for loop to continue minting for the set amount asked.
        for (uint8 counter = 0; counter < _amount; counter++) {
            // 1.Mints the NFT to the current tokenID
            // 2. Maps the current tokenChoice to the current URI
            // 3. Adds one to tokenIDtracker
            _tokenIdTracker.increment();
            super._mint(msg.sender, _tokenIdTracker.current());
        }

        // WhitelistClaim and MintNumber Recorded
        sharksMinted[msg.sender] = sharksMinted[msg.sender] + _amount;
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

        // Limits the number minted per wallet
        require(
            sharksMinted[msg.sender].add(_amount) <= 20,
            "Max mint per wallet is 20. Try another wallet."
        );

        // Limits the TokenID
        require(
            (_tokenIdTracker.current().add(_amount)) <= maxSupply,
            "Current Mint Limit Reached. Try minting less."
        );

        // Runs a for loop to continue minting for the set amount asked.
        for (uint8 counter = 0; counter < _amount; counter++) {
            // 1.Mints the NFT to the current tokenID
            // 2. Maps the current tokenChoice to the current URI
            // 3. Adds one to tokenIDtracker
            _tokenIdTracker.increment();
            super._mint(msg.sender, _tokenIdTracker.current());
        }

        sharksMinted[msg.sender] = sharksMinted[msg.sender] + _amount;
    }

    // ADMIN Methods

    // SharkDrop Method
    function sharkDrop(address[] calldata _addresses, uint8 _x)
        public
        onlyOwner
    {
        for (uint256 counter = 0; counter < _addresses.length; counter++) {
            for (uint256 n = 0; n < _x; n++) {
                _tokenIdTracker.increment();
                _mint(_addresses[counter], _tokenIdTracker.current());
                sharksMinted[_addresses[counter]].add(1);
            }
        }
    }

    // Switches sale to public
    function switchToPublic() public onlyOwner {
        bool current = publicSale;
        publicSale = !current;
    }

    //Withdraw Method

    function withdraw() public onlyOwner {}

    // TotalSupply Method
    function totalSupply() public view returns (uint256) {
        return _tokenIdTracker.current();
    }

    // URI methods
    function setBaseUri(string memory _uri) public onlyOwner {
        uri = _uri;
    }

    // OVERRIDE BaseURI Methods
    function _baseURI() internal view virtual override returns (string memory) {
        return uri;
    }
}
