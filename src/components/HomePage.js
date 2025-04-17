import React from 'react';

function HomePage({ numQuestions, setNumQuestions, startExam, maxQuestions }) {
  return (
    <div className="homepage-container">
      <div className="homepage-inner">
        <div className="text-center">
          <h2 className="exam-title">Câu hỏi luyện tập</h2>
          <h1>Kubernetes and Cloud Native Security Associate (KCSA)</h1>
          <div className="input-container">
            <label className="input-label">
              Chọn số câu hỏi cần làm (tối đa {maxQuestions} câu):
              <input
                type="number"
                value={numQuestions}
                onChange={(e) => setNumQuestions(Math.max(1, Math.min(maxQuestions, parseInt(e.target.value) || 0)))}
                className="question-input"
              />
            </label>
          </div>
          <button
            onClick={startExam}
            className="start-button"
          >
            Làm bài
          </button>
        </div>

        {/* ADD A SECTION ABOUT THE APP AND HOW TO USE IT */}
        <div className="about-container">
          {/* <div className="about-header">
            <h2 className="section-title">About the App</h2>
          </div> */}
          <div className="about-content">
            <p className="about-text">
              Ứng dụng này là bài thi thử chứng chỉ Kubernetes Security (KCSA), gồm các câu hỏi trắc nghiệm giúp bạn ôn tập kiến thức về bảo mật trong Kubernetes. Mỗi câu hỏi có giới hạn thời gian 1 phút, bạn có thể đánh dấu để xem lại sau. Kết thúc bài thi, bạn sẽ được xem lại đáp án và giải thích chi tiết.
            </p>
            <h1 className="about-text">
              Lưu ý: Đây không phải là đề thi thật.
            </h1>
          </div>
          {/* Invite people to contribute to the project on GitHub. */}
        </div>      
      </div>
    </div>
  );
}

export default HomePage;
