import java.awt.*;
import java.util.ArrayList;

public class GreenBall extends Ball {
    public GreenBall(Color color, int xSpeed, int ySpeed, int ballSize) {
        super(color, xSpeed, ySpeed, ballSize);
    }

    //update
    private ArrayList<Ball> observers = new ArrayList<>();
//    public ArrayList<Ball> observers = new ArrayList<>();

    @Override
    public ArrayList<Ball> getObserver() {
        return observers;
    }

    @Override
    public void addObserver(Ball ball) {
        observers.add(ball);
    }

    @Override
    public void update(char keyChar) {
        switch (keyChar) {
            case 'a':
                this.setXSpeed(Math.abs(this.getXSpeed()) * -1);
                break;
            case 'd':
                this.setXSpeed(Math.abs(this.getXSpeed()));
                break;
            case 'w':
                this.setYSpeed(Math.abs(this.getYSpeed()) * -1);
                break;
            case 's':
                this.setYSpeed(Math.abs(this.getYSpeed()));
                break;
        }

    }

    @Override
    public void move() {
        int newX = this.getX() + this.getXSpeed();
        int newY = this.getY() + this.getYSpeed();

        this.setX(newX);
        this.setY(newY);

        if (newX <= 0) {
            this.setXSpeed(Math.abs(getXSpeed()));
        } else if (newX >= 600 - this.getBallSize()) {
            this.setXSpeed(-1 * Math.abs(getXSpeed()));
        }

        if (newY <= 0) {
            this.setYSpeed(Math.abs(getYSpeed()));
        } else if (newY > 600 - this.getBallSize()) {
            this.setYSpeed(-1 * Math.abs(getYSpeed()));
        }

        for (Ball ball : observers) {
            if (ball.getColor() == Color.BLUE) {
                if (calc_distance(ball) < 4900) {
                    ball.setColor(new Color(51, 153, 255));

                    ball.setX(this.getX() > ball.getX() ? ball.getX() - 40 : ball.getX() + 40);
                    ball.setY(this.getY() > ball.getY() ? ball.getY() - 40 : ball.getY() + 40);

                }
            } else if (ball.getColor() == Color.RED) {
                if (calc_distance(ball) < 6400) {
                    ball.setColor(new Color(255, 102, 102));
                    ball.setX(this.getX() > ball.getX() ? ball.getX() - 30 : ball.getX() + 30);
                    ball.setY(this.getY() > ball.getY() ? ball.getY() - 30 : ball.getY() + 30);
                }
            }

        }
    }

    public int calc_distance(Ball b) {
        int result = 0;
        result += (int) Math.pow((this.getX() - b.getX()), 2);
        result += (int) Math.pow((this.getY() - b.getY()), 2);
        return result;
    }
}
