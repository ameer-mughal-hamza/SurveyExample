document.addEventListener('DOMContentLoaded', function () {

    var questions = [{
        'question_text': 'Do you have a CDL and operate an interstate or/and intrastate business on public roads?',
        'question_no': 0,
        'logo': 'icons/CDL.png',
        'yes_identifier': 2,
        'no_identifier': 1,
        'break_flag': 1,
    }, {
        'question_text': 'This chart does not pertain to you.',
        'question_no': 1,
        'logo': 'icons/Doesn\'t Pertain You.png',
        'yes_identifier': 1,
        'no_identifier': 1,
        'break_flag': 0
    }, {
        'question_text': 'Are you in a DOT Drug and Alcohol Program?',
        'question_no': 2,
        'logo': "icons/Drug & Alcohol Program.png",
        'yes_identifier': 3,
        'no_identifier': 4,
        'break_flag': 1
    }, {
        'question_text': 'Are you an owner-operator?',
        'question_no': 3,
        'logo': 'icons/Owner Operator.png',
        'yes_identifier': 5,
        'no_identifier': 6,
        'break_flag': 1
    }, {
        'question_text': 'Owner-operators and motor carriers that have only one CDL driver must join a consortium. If the motor carrier has more than one driver they may join a consortium, but they must get their drivers in a DOT Drug and Alcohol Program. To learn more click here: http://www.fmcsa.dot.gov/regulations/drug-alcohol-testing/what-are-consortiumthird-party-administrator',
        'question_no': 4,
        'logo': 'icons/Go to the link.png',
        'yes_identifier': 3,
        'no_identifier': 3,
        'break_flag': 1
    }, {
        'question_text': 'If you are an owner-operator and you have already enrolled in a DOT Drug and Alcohol Program then you do not need the DOT Supervisor Training.',
        'question_no': 5,
        'logo': 'icons/Owner Operator.png',
        'yes_identifier': 1,
        'no_identifier': 1,
    }, {
        'question_text': 'Are you a supervisor?',
        'question_no': 6,
        'logo': 'icons/Supervisor.png',
        'yes_identifier': 8,
        'no_identifier': 7,
        'break_flag': 1
    }, {
        'question_text': 'If you are not a supervisor,then you do not need the DOT Supervisor Training.',
        'question_no': 7,
        'logo': 'Dont Need Supervisor Training.png',
        'yes_identifier': 1,
        'no_identifier': 1,
        'break_flag': 0
    }, {
        'question_text': 'Have you ever taken the DOT Supervisor Training at your current job?',
        'question_no': 8,
        'logo': 'icons/Supervisor.png',
        'yes_identifier': 9,
        'no_identifier': 10,
        'break_flag': 1
    }, {
        'question_text': 'You are not required to take the DOT Supervisor Training. However if the trained supervisor leaves the company, then the new supervisor must get the required DOT Supervisor Training.',
        'question_no': 9,
        'logo': 'icons/Have you ever taken the DOT Supervisor Training.png',
        'yes_identifier': 1,
        'no_identifier': 1,
        'break_flag': 0
    }, {
        'question_text': 'To take the DOT Supervisor Training go here: http://transit-safety.volpe.dot.gov/DrugAndAlcohol/Tools/ReasonableSuspicion.aspx',
        'question_no': 10,
        'logo': 'icons/Have you ever taken the DOT Supervisor Training.png',
        'yes_identifier': 1,
        'no_identifier': 1,
        'break_flag': 0
    }];

    var currentQuestion = 0;
    var static_counter = document.querySelector('.progress-counter');
    var clicked = document.getElementsByClassName('button-yes');
    var skipped = document.getElementsByClassName('button-no');
    var span_yes = document.querySelector('.span-yes');
    var span_no = document.querySelector('.span-no');
    var question_template = document.querySelector('.question-template');
    var questions_wrap = document.querySelector('.questions-wrap');
    var input_area = document.getElementsByClassName('input-area')[0];
    var incentive = document.getElementsByClassName('incentive')[0];
    var totQuestions = questions.length;

    function loadQuestion(questionIndex) {
        var q = questions[questionIndex];
        var yes_id = document.getElementById("submit");
        yes_id.setAttribute('data-yes-identifier', q.yes_identifier);
        var no_id = document.getElementById("no");
        no_id.setAttribute('data-no-identifier', q.no_identifier);
        questions_wrap.textContent = q.question_text;
        var logo = document.getElementsByClassName('logo');
        document.getElementById("finish").style.visibility = "hidden";
        logo.src = q.logo;
        currentQuestion++;
    }

    document.getElementById("submit").addEventListener('click', function () {
        var question_id = this.getAttribute('data-yes-identifier');
        console.log('data : ' + question_id);
        loadNextQuestion(question_id);
    });

    document.getElementById("no").addEventListener('click', function () {
        var question_id = this.getAttribute('data-no-identifier');
        console.log('data : ' + question_id);
        loadNextQuestion(question_id);
    });

    function reloadWindow() {
        location.reload();
    }

    var finish = document.getElementById("finish");
    finish.addEventListener('click', function () {
        reloadWindow();
    });

    function loadNextQuestion(questionIndex) {
        var q = questions[questionIndex];
        if (q.break_flag === 1) {
            questions_wrap.textContent = q.question_text;
            var logo = document.getElementById("logo");
            logo.src = q.logo;
            var yes_id = document.getElementById("submit");
            yes_id.setAttribute('data-yes-identifier', q.yes_identifier);
            var no_id = document.getElementById("no");
            no_id.setAttribute('data-no-identifier', q.no_identifier);
        } else {
            questions_wrap.textContent = q.question_text;
            document.getElementById("submit").style.display = 'none';
            document.getElementById("no").style.display = 'none';
            document.getElementById("finish").style.visibility = "visible";
        }
    }

    loadQuestion(currentQuestion);
});