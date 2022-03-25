import { utils } from "ethers";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

const users = [
    { address: "0x7aE9976bCd6CE72125f12eFb5e109f2Bc25A7bC0", expirationDays: 10 },
];

export type AirdropType = {
    days: number;
    proof: string[];
}

const getProof = (address: string): AirdropType | null => {
    const user = users.find(u => u.address === address);
    if (!user) return null;
    const elements = users.map((x) =>
        utils.solidityKeccak256(["address", "uint256"], [x.address, x.expirationDays])
    );
    const merkleTree = new MerkleTree(elements, keccak256, { sort: true });
    const leaf = utils.solidityKeccak256(["address", "uint256"], [user.address, user.expirationDays])
    const proof = merkleTree.getHexProof(leaf);
    return { days: user.expirationDays, proof }
}

const constructTree = (elements: string[]) => {
    const items = elements.map((x) => {
        return utils.solidityKeccak256(["string"], [x])
    });
    const merkleTree = new MerkleTree(items, keccak256, { sort: true });
    // console.log('merkle tree', merkleTree)
    const root = merkleTree.getRoot().toString('hex')
    return root
}

// const getLeaf = (word: string, root: string) => {
//     const leaf = utils.solidityKeccak256(["string"], [x])
//     const proof = merkleTree.getHexProof(leaf);

// }

export {
    getProof,
    constructTree
}