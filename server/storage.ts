import { type ExecomMember, type Activity, type Achievement, type ContactForm } from "@shared/schema";
import { randomUUID } from "crypto";

// Storage interface for IEEE SIGHT website data
export interface IStorage {
  getExecomMembers(): Promise<ExecomMember[]>;
  getActivities(): Promise<Activity[]>;
  getAchievements(): Promise<Achievement[]>;
  submitContactForm(form: ContactForm): Promise<void>;
}

export class MemStorage implements IStorage {
  private execomMembers: ExecomMember[];
  private activities: Activity[];
  private achievements: Achievement[];

  constructor() {
    this.execomMembers = [];
    this.activities = [];
    this.achievements = [];
  }

  async getExecomMembers(): Promise<ExecomMember[]> {
    return this.execomMembers;
  }

  async getActivities(): Promise<Activity[]> {
    return this.activities;
  }

  async getAchievements(): Promise<Achievement[]> {
    return this.achievements;
  }

  async submitContactForm(form: ContactForm): Promise<void> {
    // In a real implementation, this would save to database
    console.log('Contact form submitted:', form);
  }
}

export const storage = new MemStorage();
