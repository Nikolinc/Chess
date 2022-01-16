import bishop_b from './assets/images/bishop_b.png';
import bishop_w from './assets/images/bishop_w.png';
import king_b from './assets/images/king_b.png';
import king_w from './assets/images/king_w.png';
import knight_b from './assets/images/knight_b.png';
import knight_w from './assets/images/knight_w.png';
import pawn_b from './assets/images/pawn_b.png';
import pawn_w from './assets/images/pawn_w.png';
import queen_b from './assets/images/queen_b.png';
import queen_w from './assets/images/queen_w.png';
import rook_b from './assets/images/rook_b.png';
import rook_w from './assets/images/rook_w.png';



export default function figure(){
    const figureMap = new Map();

    figureMap.set('bishop_b',bishop_b);
    figureMap.set('bishop_w',bishop_w);
    figureMap.set('king_b',king_b);
    figureMap.set('king_w',king_w);
    figureMap.set('knight_b',knight_b);
    figureMap.set('knight_w',knight_w);
    figureMap.set('pawn_w',pawn_w);
    figureMap.set('pawn_b',pawn_b);
    figureMap.set('queen_b',queen_b);
    figureMap.set('queen_w',queen_w);
    figureMap.set('rook_b',rook_b);
    figureMap.set('rook_w',rook_w);
    



    return figureMap
}