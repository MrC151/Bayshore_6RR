// ghost_bingo.d.ts
declare module './ghost_bingo' {
    import { Request, Response } from 'express';

    export function saveBingoCard(req: Request, res: Response): Promise<void>;
    export function loadBingoCard(req: Request, res: Response): Promise<void>;
}
