import react from "react"
import { Card } from "./card"

export const Cardsfront=()=>{
    return(
        <div className="d-flex card-list justify-content-center">
            <div className="card-list-item"> 
            <Card 
            image="https://imgs.search.brave.com/MrgijKEAcUECAeiSE7IyJD8_YC-Ds3MtG1Cp1QmYw_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9xNjAydnRj/dXUzdzMvMTNwZkw4/cG5pRzVZWmpFdDRT/Rjg3SC83OGI0ZGM3/YjhmZmViMTU1OWY0/YzRlMThhYTc2N2Yy/Mi8yM19PQ1QtV0sy/LVdPTUVOUy1PUFRC/QU4tTUZCLmpwZz93/PTU2MyZxPTgwJmZt/PWpwZyZmbD1wcm9n/cmVzc2l2ZQ"
            /></div>
            <div className="card-list-item"><Card
            image="https://imgs.search.brave.com/VkCQqOq73BeesEf0j3ETFIUmpFV2egMPq8JWcEAYXwA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF5bGxjTG81NUwu/anBn"
            /></div>
            <div className="card-list-item"><Card 
            image="https://imgs.search.brave.com/4Yp8v2wts63Ti5uP7On-Cb6nY8l3-_ckMXXPph6oYpI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFxaC16QXRHaEwu/anBn"
            /></div>
            <div className="card-list-item"><Card
            image="https://imgs.search.brave.com/HLjVxXjkXgrbhp05nlFusVWAKrn2Nssl47Bv3dfKgW8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9xNjAydnRj/dXUzdzMvNks5NXE1/S21selFaYmkzRlpy/bE9zRi9hNTVjZDgw/OGEyZGE2NTAzMGQy/ZDU1MTBhMGY4MmEy/Yy8yM19PQ1QtV0sy/LVdPTUVOUy1PUFRC/QU4tTUZCNS5qcGc_/dz01NjMmcT04MCZm/bT1qcGcmZmw9cHJv/Z3Jlc3NpdmU"
            /></div>
        </div>
    )
}