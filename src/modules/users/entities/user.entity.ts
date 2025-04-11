import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Index,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true, name: "email" })
  @Index({ unique: true })
  email: string;

  @Column({ name: "age", nullable: true })
  age?: number;

  @Column({ default: false, name: "should_show_age" })
  shouldShowAge: boolean;

  @Column({ name: "gender", nullable: true })
  gender?: string;

  @Column({ default: false, name: "should_show_gender" })
  shouldShowGender: boolean;

  @Column({ nullable: true, name: "sexual_orientation" })
  sexualOrientation?: string;

  @Column({ default: false, name: "should_show_sexual_orientation" })
  shouldShowSexualOrientation: boolean;

  @Column({ name: "interests", nullable: true })
  interests?: string;

  @Column({ name: "looking_for", nullable: true })
  lookingFor?: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
