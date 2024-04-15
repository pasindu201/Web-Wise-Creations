package com.example.questionare.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionDTO {
    private int question_num;
    private String question;
    private String option1;
    private String option2;
    private String option3;
    private String option4;
}
