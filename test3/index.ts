class Player {
  private name: string;
  private age: string;
  private gender: string;
  cards: number[] = [1, 2, 3, 4, 5];

  constructor(name: string, age: string, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public think(): number {
    return Math.floor(1 + Math.random() * 5);
  }

  public set(): number {
    const thoughtCard: number = this.think();
    return thoughtCard;
  }
  public getName(): string {
    return this.name;
  }
}

const player1 = new Player("Aさん", "20歳", "男性");
const player2 = new Player("Bさん", "20歳", "女性");

class JudgeSystem {
  private winnerLogs: string[] = [];
  private fase: string[] = [
    "START",
    "BEFORE_SET",
    "OPENED_CARD",
    "JUDGED",
    "END",
  ];

  public changeFase(i: number): void {
    console.log(this.fase[i]);
  }

  public judge(
    name1: string,
    set1: number,
    name2: string,
    set2: number
  ): string[] {
    if (set1 > set2) {
      this.winnerLogs.push(name1);
    } else if (set1 < set2) {
      this.winnerLogs.push(name2);
    } else {
      this.winnerLogs.push("draw");
    }
    return this.winnerLogs;
  }
}

const name1 = player1.getName();
const name2 = player2.getName();
const judgesystem = new JudgeSystem();

for (let i = 0; i < 100; i++) {
  judgesystem.changeFase(0);
  judgesystem.changeFase(1);
  let set1 = player1.set();
  let set2 = player2.set();
  judgesystem.changeFase(2);
  console.log(judgesystem.judge(name1, set1, name2, set2));
  judgesystem.changeFase(3);
  judgesystem.changeFase(4);
}