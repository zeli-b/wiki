## Game Objective
Players place their Grasôxa (stones) on the Gravülien (game board) according to the established rules. The player with the most Grasôxa on the Gravülien at the end of the game wins.

## Preparation
* **Gravülien (Board):** A square grid game board with indented intersections (e.g., 7x7, 13x13, 17x17, 23x23 prime number dimensions are common, chosen based on desired game length). Each intersection can hold one Grasôxa.
* **Grasôxa (Pieces):** A number of small, typically spherical game pieces. They may be distinguished by color or shape for different players.

### Origin Story
The Gravülien and Grasôxa were originally derived from pharmacy pill organizers and pills. The practice of sorting different types of pills into a compartmentalized grid evolved into this game and its components.

## Rule Setting
Before the game begins, the values for the following parameters `a, b, c, d, e` are randomly determined (e.g., via card draw, dice roll, mutual agreement). These values define the placement rules all players must follow during the game.

* **Continuity Rule:** A player, upon placing their Grasôxa, cannot create a state where **Grasôxa exceeding `a` in number (regardless of color or type)** are arranged **with the same interval** on a single straight line (horizontal, vertical, or diagonal). That is, the maximum number of stones placed on a single line with the same interval (allowing for empty spaces between them) is `a`. (A player whose move creates a state where `a+1` or more stones are arranged with the same interval commits a rule violation.)
    * _Example 1:_ If $a=3$, the configuration `X . X . O` (interval 2) is legal. However, adding another X at the same interval (interval 2) to make `X . X . O . X` is a violation, as there are now 4 stones arranged with the same interval (2) on that line.
    * _Example 2:_ If $a=3$, `X X X X` (interval 1) is a violation because 4 stones are arranged with the same interval (1). `X X X` is legal.
    * _Example 3:_ If $a=3$, a configuration like `X . O X X . . O` can be created. Although there are multiple stones on the line, no group of stones exceeding 3 pieces is arranged with any single *constant* interval, so it is legal. (e.g., Interval 1 has max length 2 (`XX`), Interval 2 sequences like `X.O`, `O.X`, `X..O` have max length 2, Interval 3 sequences like `X..X`, `O..X`, `X...O` have max length 2.)
* **Density Rule:** Within any arbitrary $b \times b$ square area on the Gravülien, a maximum of `c` Grasôxa (regardless of color or type) can be placed. (If placing a stone results in $c+1$ or more stones within any $b \times b$ area, it is a rule violation.)
* **Distance Rule:** When placing a Grasôxa (excluding the very first one), it must be positioned at a location where the taxi distance (Manhattan distance) from the immediately preceding Grasôxa placed on the Gravülien is **greater than or equal to `d` and less than or equal to `e`** (i.e., $d \le \text{distance} \le e$). The first Grasôxa placed is not subject to this restriction.
    * Taxi Distance: The distance between two points (x1, y1) and (x2, y2) is calculated as $|x1-x2| + |y1-y2|$.

* **Bonus Turn Rule:** If a player, due to the Grasôxa they placed, causes **4 or more Grasôxa** on the Gravülien (regardless of color or type) to form a perfect **point-symmetric shape around any arbitrary point** as the center of symmetry, they **immediately gain additional turns equal to the number of such point-symmetric shapes completed and proceed.** (e.g., If one move simultaneously completes 2 different point-symmetric shapes, 2 additional turns are gained.)
    * The center of symmetry does not need to be an intersection point on the Gravülien grid and could be the geometric center of the Grasôxa forming the pattern. (The determination of point symmetry should follow clear, mutually agreed-upon criteria.)

* **Parameter Notes (Difficulty Reference):**
    * $a \ge 3$: Lower `a` is harder (max stones in an arithmetic progression decreases).
    * $b \ge 2$: Higher `b` is supposedly harder (density check window increases - impact may vary depending on `c`).
    * $1 < c \le b^2$: Lower `c` is harder (max stones allowed in density window decreases).
    * $e - d \ge 0$: Lower range width (`e-d`) is harder (fewer distance options).
    * $e \ge d$: Lower distance values (`d`, `e`) are harder (forces closer placement).

## Gameplay

1.  **Start:** Any player begins the game by placing the first Grasôxa on any empty intersection. Players then take turns in a clockwise (or otherwise agreed-upon) order, establishing the player sequence (first player, second player, etc.).
2.  **Taking a Turn:** On their turn, a player places one of their Grasôxa on an empty intersection, adhering to all rules established in the Rule Setting phase (Continuity, Density, Distance).
3.  **"Grav" Challenge – Pointing out a Rule Violation:**
    * If a player believes the opponent who just moved has violated any of the rules set in the Rule Setting phase with their placement, they may immediately shout "Grav!".
    * If playing with 3 or more players, the first player to shout "Grav!" takes responsibility for and receives the rewards/penalties of the challenge.
    * **If the "Grav!" challenge is CORRECT:**
        1.  The opponent's attempted move is invalid; the Grasôxa they tried to place is not put on the Gravülien.
        2.  The opponent immediately loses their current turn.
        3.  **Penalty:** The player who shouted "Grav!" designates one of the opponent's (the rule violator's) Grasôxa already on the Gravülien to be removed. The removed Grasôxa is out of the game.
        4.  The turn passes to the player who shouted "Grav!".
    * **If the "Grav!" challenge is INCORRECT (the opponent's move was valid):**
        1.  The opponent's move stands and the Grasôxa remains on the Gravülien.
        2.  The player who shouted "Grav!" cannot place a Grasôxa on their next regular turn (they essentially skip a turn). The opponent's turn ends normally, and play proceeds to the next player in order (in a 2-player game, it becomes the opponent's turn again).
4.  **Pass:**
    * On their turn, instead of placing a Grasôxa, a player may declare "Pass". This may be chosen if there are no valid moves available or for strategic reasons.

## End Game
* The game ends immediately when all players consecutively declare "Pass". (e.g., In a 2-player game, if Player 1 passes and then Player 2 also passes, the game ends).
* At the end of the game, the player with the most Grasôxa on the Gravülien wins. If there is a tie in the number of Grasôxa, the player who was later in the initially established turn order wins.
