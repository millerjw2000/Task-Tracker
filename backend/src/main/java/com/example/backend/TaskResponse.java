package com.example.backend;

import java.util.ArrayList;

import com.example.backend.Model.Task;

public class TaskResponse {

    private ArrayList<Task> completed;
    private ArrayList<Task> upcoming;
    private ArrayList<Task> overdue;

    public TaskResponse(ArrayList<Task> tasks) {

        completed = new ArrayList<Task>();
        upcoming = new ArrayList<Task>();
        overdue = new ArrayList<Task>();

        Integer current = (int) (System.currentTimeMillis() / 1000);
        
        for (Task task : tasks) {

            if (task.getStatus() == 1) {
                completed.add(task);
                continue;
            }

            if (task.getDueTime() > current) {
                upcoming.add(task);
            } else {
                overdue.add(task);
            }

        }

    }

    public ArrayList<Task> getCompleted() {
        return completed;
    }

    public ArrayList<Task> getUpcoming() {
        return upcoming;
    }

    public ArrayList<Task> getOverdue() {
        return overdue;
    }

}
